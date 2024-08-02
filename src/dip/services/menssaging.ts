import { MenssagingProtocol } from "../classes/interfaces/menssaging-protocol";

export class Menssaging implements MenssagingProtocol {
  sendMessage(msg: string): void {
    console.log('Menssage sent:', msg);
  }
}
