import crypto from 'crypto'

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || ''

if (!ENCRYPTION_KEY) {
    throw new Error('ENCRYPTION_KEY environment variable is required')
}
const IV_LENGTH = 16

export function encrypt(text: string): string {
    if (!text) return text

    // If no env key provided in dev, ensure fallback is 32 bytes
    const key = ENCRYPTION_KEY.length === 32 ? ENCRYPTION_KEY : crypto.createHash('sha256').update(ENCRYPTION_KEY).digest('base64').substring(0, 32)

    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return iv.toString('hex') + ':' + encrypted.toString('hex')
}

export function decrypt(text: string): string {
    if (!text) return text
    if (!text.includes(':')) return text // Not encrypted or legacy

    const key = ENCRYPTION_KEY.length === 32 ? ENCRYPTION_KEY : crypto.createHash('sha256').update(ENCRYPTION_KEY).digest('base64').substring(0, 32)

    try {
        const textParts = text.split(':')
        const iv = Buffer.from(textParts.shift()!, 'hex')
        const encryptedText = Buffer.from(textParts.join(':'), 'hex')
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
        let decrypted = decipher.update(encryptedText)
        decrypted = Buffer.concat([decrypted, decipher.final()])
        return decrypted.toString()
    } catch (error) {
        console.error('Decryption failed:', error)
        // Return empty string or throw depending on preference. 
        // Throwing is safer to prevent using bad data.
        throw new Error('Failed to decrypt data.')
    }
}
