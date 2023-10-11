import { actorCalled } from '@serenity-js/core';
import { Question } from '@serenity-js/core';
import { test, expect } from '@playwright/test';

export class Verificaciones {

    static async isPresent(elemento: string,pregunta: Question<Promise<boolean>>) {
        const actor = actorCalled('Usuario');
        const estaPresente = await actor.answer(pregunta);
        expect(estaPresente,'elemento ' + elemento + ' esta presente').toBe(true);
    }
}