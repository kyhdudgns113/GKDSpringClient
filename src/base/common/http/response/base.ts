export type ResponseType = {
  ok: boolean
  body: any
  statusCode: number
  gkdErrMsg: string // 개발자가 직접 작성한 에러 메시지
  message: string // 시스템이나 라이브러리등이 띄우는 메시지
  jwtFromServer?: string
}
