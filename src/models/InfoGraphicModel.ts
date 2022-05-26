class InfoGraphicModel{
    headline: string;
    title: string;
    desc: string;
    image: string;

    constructor(headline: string, title: string, desc: string, image: string){
        this.headline = headline;
        this.desc = desc;
        this.title = title;
        this.image = image;
    }
}

export default InfoGraphicModel;