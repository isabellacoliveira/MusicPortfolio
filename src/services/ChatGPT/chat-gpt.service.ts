import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';  
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  chamarChatGPT(nomeDaMusica: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: 'gpt-3.5-turbo',  
      prompt: `Gere a cifra da música: ${nomeDaMusica}, para violão`,
      messages: [
        { role: 'system', content: 'Você é um assistente virtual.' },
        { role: 'user', content: nomeDaMusica },
      ],
    };

    return this.http.post(this.apiUrl, requestBody, { headers });
  }
}
