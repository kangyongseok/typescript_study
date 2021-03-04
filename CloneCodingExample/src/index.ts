import * as CryptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    static calcurateBlockHash = ( // static 선언이 없으면 해당 클래스 블록을 생성해야 이 메소드를 사용가능
        index: number, 
        previousHash: string, 
        timeStamp: number, 
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timeStamp + data).toString ()

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timeStamp: number,
    ) {
        this.index = index
        this.hash = hash
        this.previousHash = previousHash
        this.data = data
        this.timeStamp = timeStamp
    }
}

const genesisBlock: Block = new Block(0, '2020202020', "", "hello", 12345);
let blockChain: Block[] = [genesisBlock] 

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)
const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calcurateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    return newBlock
} 

console.log(createNewBlock("Hello"), createNewBlock("Bye Bye"))