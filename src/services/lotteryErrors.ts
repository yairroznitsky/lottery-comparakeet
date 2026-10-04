export class LotteryApiError extends Error {
  readonly status: number;
  readonly endpoint: string;

  constructor(message: string, status: number, endpoint: string) {
    super(message);
    this.name = "LotteryApiError";
    this.status = status;
    this.endpoint = endpoint;
  }
}

export function isLotteryApiError(error: unknown): error is LotteryApiError {
  return error instanceof LotteryApiError;
}
