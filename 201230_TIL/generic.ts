function getText<T>(text: T): T {
    return text;
}

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);