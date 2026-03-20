import axios from 'axios'

/**
 * Generates a UUID for request tracing.
 * Falls back to a timestamp-based ID for older browsers without crypto.randomUUID().
 */
function generateUUID(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID()
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost/blocpoint/blocpoint-api/public/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// ─── Request Interceptor ─────────────────────────────────────────
api.interceptors.request.use((config) => {
    // Per-request trace ID
    config.headers['X-Correlation-Id'] = generateUUID()

    // Idempotency key for mutating requests
    const isMutation = ['post', 'put', 'patch', 'delete'].includes((config.method || '').toLowerCase())
    if (isMutation) {
        config.headers['Idempotency-Key'] = generateUUID()
    }

    return config
})

// ─── Response Interceptor ────────────────────────────────────────
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Surface a clear error for network failures (e.g. CORS, offline)
        if (!error.response) {
            console.error('[Landing API] Network error — is the backend running?', error.message)
        }
        return Promise.reject(error)
    }
)

export default api
