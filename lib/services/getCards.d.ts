declare const getCards: (page?: number | undefined) => Promise<any>;
declare const getCard: (params: Record<string, string>) => Promise<any>;
export { getCards, getCard };
