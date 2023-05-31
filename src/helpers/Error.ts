export class ApiError extends Error {
	public readonly statusCode: number

	constructor(message: string | any, statusCode: number) {
		super(message)
		this.statusCode = statusCode
	}
}