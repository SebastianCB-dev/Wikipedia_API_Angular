import { Injectable } from '@angular/core';

import textgears from 'textgears-api';

@Injectable({
  providedIn: 'root'
})
export class SpellingService {

  private tgAPI = textgears('MSucEoi1cxa9Qt9t', {language: 'en-US', ai: false});

  constructor() { }

  async getSuggestion(words: string) {
   return await this.tgAPI.checkGrammar(words)
  }
}
