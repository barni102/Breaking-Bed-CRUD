export class Character{
    id: number;
    name: string;
    nickname: string;
    birthday: Date;
    img: string;
    status: string;

    constructor (id: number, name: string,nickname: string,birthday: Date,img: string,status: string){
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.birthday = birthday;
        this.img = img;
        this.status = status;
    }
}