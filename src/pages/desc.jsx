import '../style/desc.scss';
import React from 'react';
import {
    Link
} from "react-router-dom";
import top from "../asset/top.png";
import { connect } from "react-redux";

class ConnectCases extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseX: 0,
            mouseY: 0,
        }

        this.handleMoving = this.handleMoving.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('mousemove', this.handleMoving);

        this.setState({ mouseX: window.innerHeight / 2 });
        this.setState({ mouseY: window.innerWidth / 2 });
    }

    handleMoving(event) {
        this.setState({ mouseX: event.pageX });
        this.setState({ mouseY: event.pageY });
    }

    render() {
        let bg = this.props.data[this.props.match.params.page].bg;
        let link = this.props.data[this.props.match.params.page].link;
        let title = this.props.data[this.props.match.params.page].title;
        let tools = this.props.data[this.props.match.params.page].tools;
        let problem = this.props.data[this.props.match.params.page].problem;
        let solution = this.props.data[this.props.match.params.page].solution;

        return (
            <div className="desc-wrapper">
                <div className="moving-ball" style={{ top: this.state.mouseY, left: this.state.mouseX }}></div>
                <Link className="back" to="/"><img src={top} className="img-fluid" /></Link>
                <div className={`bg ${bg}`}></div>
                <div className="cnt-box">
                    <h2 className="title">{title}</h2>
                    <div className="hr"></div>
                    <div className="content">
                        <div className="cnt-row">
                            <h2 className="cnt-title">使用工具</h2>
                            <div className="cnt-text" dangerouslySetInnerHTML={{ __html: tools }} />
                        </div>
                        <div className="cnt-row">
                            <h2 className="cnt-title">遭遇問題</h2>
                            <div className="cnt-text" dangerouslySetInnerHTML={{ __html: problem }} />
                        </div>
                        <div className="cnt-row">
                            <h2 className="cnt-title">解決方法</h2>
                            <div className="cnt-text" dangerouslySetInnerHTML={{ __html: solution }} />
                        </div>
                    </div>
                    <a className="link" href={link} target="_blank">GO</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = data => {
    return { data }
}

const Cases = connect(mapStateToProps)(ConnectCases)


export default Cases;