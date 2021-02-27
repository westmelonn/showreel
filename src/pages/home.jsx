import '../style/home.scss';
import watermelon from "../asset/watermelon.png";
import downArrow from "../asset/down-arrow.png";
import top from "../asset/top.png";

import React from 'react';
import {
    Link
} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.headerRef = React.createRef();
        this.selfRef = React.createRef();
        this.oceanRef = React.createRef();
        this.influxRef = React.createRef();
        this.aiRef = React.createRef();
        this.jiangfloorRef = React.createRef();
        this.shinsafengRef = React.createRef();
        this.worksRef = React.createRef();

        this.state = {
            typingRate: 250,
            textAreaShow: "",
            isTyping: false,
            waitToType: ["FRONTEND ", "ENGINEER"],
            delayTime: 1,

            needtop: false,

            mouseX: 0,
            mouseY: 0,

            selfX: 0,
            selfY: 0,

            headerX: 0,
            headerY: 0,

            oceanX: 0,
            oceanY: 0,

            influxX: 0,
            influxY: 0,

            aiX: 0,
            aiY: 0,

            jiangfloorX: 0,
            jiangfloorY: 0,

            shinsafengX: 0,
            shinsafengY: 0,

        };

        this.scrolldown = this.scrolldown.bind(this);
        this.scrolling = this.scrolling.bind(this);
        this.backtotop = this.backtotop.bind(this);
        this.handleMoving = this.handleMoving.bind(this);
    }

    componentDidMount() {
        let waitToType = this.state.waitToType;
        if (waitToType.length > 0) {
            let stringInput = waitToType.shift();
            setTimeout(() => this.typing(stringInput, stringInput[0], 0), this.state.typingRate);
            this.setState({
                waitToType
            })
        }

        window.addEventListener("scroll", this.scrolling, false);
        window.addEventListener('mousemove', this.handleMoving);

        this.setState({ mouseX: window.innerHeight / 2 });
        this.setState({ mouseY: window.innerWidth / 2 });

        this.setState({ selfX: window.innerHeight / 2 });
        this.setState({ selfY: window.innerWidth / 2 });

        this.setState({ headerX: window.innerHeight / 2 });
        this.setState({ headerY: window.innerWidth / 2 });

        this.setState({ oceanX: window.innerHeight / 2 });
        this.setState({ oceanY: window.innerWidth / 2 });

        this.setState({ influxX: window.innerHeight / 2 });
        this.setState({ influxY: window.innerWidth / 2 });

        this.setState({ aiX: window.innerHeight / 2 });
        this.setState({ aiY: window.innerWidth / 2 });

        this.setState({ jiangfloorX: window.innerHeight / 2 });
        this.setState({ jiangfloorY: window.innerWidth / 2 });

        this.setState({ shinsafengX: window.innerHeight / 2 });
        this.setState({ shinsafengY: window.innerWidth / 2 });
    }

    typing(stringAll, char, nowLength) {
        if (nowLength < stringAll.length) {
            // isTyping = true;
            let textAreaShow = this.state.textAreaShow + char;
            // let textArea = this.refs.textArea;
            // this.refs.textArea.innerText = textAreaShow;
            this.setState({
                textAreaShow,
                isTyping: true,
            }, () => {
                setTimeout(() => this.typing(stringAll, stringAll[nowLength + 1], nowLength + 1), this.state.typingRate);
            }, this)
        } else if (nowLength >= stringAll.length) {
            this.setState({
                isTyping: false,
            }, () => {
                let waitToType = this.state.waitToType;
                if (waitToType.length > 0) {
                    let stringInput = waitToType.shift();
                    setTimeout(() => this.typing(stringInput, stringInput[0], 0), this.state.typingRate);
                    this.setState({
                        waitToType
                    })
                }
            }, this)
        }
    }

    handleMoving(event) {
        this.setState({ mouseX: event.pageX });
        this.setState({ mouseY: event.pageY });

        try {
            let selfNode = this.selfRef.current;
            this.setState({ selfX: event.pageX - selfNode.offsetLeft });
            this.setState({ selfY: event.pageY - selfNode.offsetTop });

            let headerNode = this.headerRef.current;
            this.setState({ headerX: event.pageX - headerNode.offsetLeft });
            this.setState({ headerY: event.pageY - headerNode.offsetTop });

            let worksRef = this.worksRef.current;

            let oceanNode = this.oceanRef.current;

            this.setState({ oceanX: event.pageX - oceanNode.offsetLeft - 8 });
            this.setState({ oceanY: event.pageY - oceanNode.offsetTop - worksRef.offsetTop });

            let influxNode = this.influxRef.current;
            this.setState({ influxX: event.pageX - influxNode.offsetLeft - 8 });
            this.setState({ influxY: event.pageY - influxNode.offsetTop - worksRef.offsetTop });

            let aiNode = this.aiRef.current;
            this.setState({ aiX: event.pageX - aiNode.offsetLeft - 8 });
            this.setState({ aiY: event.pageY - aiNode.offsetTop - worksRef.offsetTop });

            let jiangfloorNode = this.jiangfloorRef.current;
            this.setState({ jiangfloorX: event.pageX - jiangfloorNode.offsetLeft - 8 });
            this.setState({ jiangfloorY: event.pageY - jiangfloorNode.offsetTop - worksRef.offsetTop });

            let shinsafengNode = this.shinsafengRef.current;
            this.setState({ shinsafengX: event.pageX - shinsafengNode.offsetLeft - 8 });
            this.setState({ shinsafengY: event.pageY - shinsafengNode.offsetTop - worksRef.offsetTop });
        } catch (e) { }

    }

    scrolldown() {
        window.scrollTo({
            top: document.querySelector('.header').offsetHeight + 15,
            left: 0,
            behavior: "smooth",
        });
    }

    scrolling() {
        try {
            this.setState({ needtop: window.scrollY > document.querySelector('.header').offsetHeight - 100 });
        } catch (e) { }
    }

    backtotop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    render() {
        let {
            textAreaShow
        } = this.state;

        let opacity;
        let pointerEvents;

        if (this.state.needtop) {
            opacity = 0.8;
            pointerEvents = 'initial';
        } else {
            opacity = 0;
            pointerEvents = 'none';
        }

        return (
            <div className="home-wrapper">
                <div className="back-top" style={{ opacity, pointerEvents }} onClick={this.backtotop}>
                    <img src={top} className="img-fluid" />
                </div>
                <div className="moving-ball" style={{ top: this.state.mouseY, left: this.state.mouseX }}></div>
                <div className="header" ref={this.headerRef}>
                    <div className="header-ball" style={{ top: this.state.headerY, left: this.state.headerX }}></div>
                    <div className="b">
                        <div className="l"><img src={watermelon} className="img-fluid" /></div>
                        <h1 className="n">MELON HSU</h1>
                        <p className="j-t">{textAreaShow}</p>
                    </div>

                    <div className="down" onClick={this.scrolldown}>
                        <img src={downArrow} className="img-fluid" />
                    </div>
                </div>
                <div className="works" ref={this.worksRef}>
                    <Link className="item" to="iisi/ocean" ref={this.oceanRef}>
                        <div className="ocean-ball" style={{ top: this.state.oceanY, left: this.state.oceanX }}></div>
                        <div className="cards">
                            <div className="card-back">
                                <div className="text">海象災防資訊平台</div>
                            </div>
                            <div className="card-front"></div>
                        </div>
                    </Link>
                    <Link className="item" to="influx/official" ref={this.influxRef}>
                        <div className="influx-ball" style={{ top: this.state.influxY, left: this.state.influxX }}></div>
                        <div className="cards">
                            <div className="card-back">
                                <div className="text">普匯金融科技官網</div>
                            </div>
                            <div className="card-front"></div>
                        </div>
                    </Link>
                    <Link className="item" to="influx/aiofficial" ref={this.aiRef}>
                        <div className="ai-ball" style={{ top: this.state.aiY, left: this.state.aiX }}></div>
                        <div className="cards">
                            <div className="card-back">
                                <div className="text">金融科技協會官網</div>
                            </div>
                            <div className="card-front"></div>
                        </div>
                    </Link>
                    <Link className="item" to="cases/jiangfloor" ref={this.jiangfloorRef}>
                        <div className="jiangfloor-ball" style={{ top: this.state.jiangfloorY, left: this.state.jiangfloorX }}></div>
                        <div className="cards">
                            <div className="card-back">
                                <div className="text">騫閣地板官網</div>
                            </div>
                            <div className="card-front"></div>
                        </div>
                    </Link>
                    <Link className="item" to="cases/shinsafeng" ref={this.shinsafengRef}>
                        <div className="shinsafeng-ball" style={{ top: this.state.shinsafengY, left: this.state.shinsafengX }}></div>
                        <div className="cards">
                            <div className="card-back">
                                <div className="text">欣三豐實業官網</div>
                            </div>
                            <div className="card-front"></div>
                        </div>
                    </Link>
                </div>

                <div className="self" ref={this.selfRef}>
                    <div className="self-ball" style={{ top: this.state.selfY, left: this.state.selfX }}></div>
                    <div className="s-row">
                        <div className="title">關於我</div>
                        <div className="content">
                            <div className="text">
                                你好，我叫西瓜ツ<br />
                                我是一名前端工程師，專門與UI/UX設計師協作設計並實現、也會和後端工程師溝通API的資料格式與如何串接。
                                喜歡挑戰複雜的設計稿與有趣的互動設計，把設計稿做得盡善盡美是我的責任。
                                使用RWD解決跑版問題是家常便飯，對於處理動畫與效能優化也有一定的經驗。
                                透過前端工程也能讓設計稿能更有錦上添花的成果。
                            </div>
                            <div className="hashtag"><span>#認真</span><span>#負責</span><span>#熱情</span></div>
                        </div>
                    </div>
                    <div className="s-row">
                        <div className="title">經歷</div>
                        <div className="content">
                            最初是使用MVC架構的全端工程師，但在後來對前後端分離的架構、前端框架與CSS預處理器產生興趣，網頁的所見即所得也很吸引我，進而往前端發展。
                            從氣象科技的jQuery+Codeigniter到金融科技的React、Vue，我在網站製作的經驗超過3年。
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;