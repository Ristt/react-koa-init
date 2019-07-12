import * as React from "react";
import { SearchBar } from 'antd-mobile';
import { connect } from 'dva';

import styles from './index.less';

interface IStateType { }
interface IPropsType { infoList: any }
@connect((index: any) => {
    const { infoList } = index.index;
    return { infoList }
})
export default class Index extends React.Component<IPropsType, IStateType> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {}
    }
    public onChange = (e: any) => {
        // console.log(e)
    }
    public renderListBlock = () => {
        const { infoList = [] } = this.props
        const infoBlock = infoList.map((item, index) => {
            return (
                <div className={styles.flex} key={index}>
                    <div>{item.username}</div>
                    <div>{item.password}</div>
                    <div>{item.email}</div>
                </div>
            )
        })
        const topBlock = ['姓名', '密码', '邮箱'].map((item, i) => {
            return <div className={styles.flex} key={i}>{item}</div>
        })
        return (
            <div>
                <div className={styles.flex}>{topBlock}</div>
                {infoBlock}
            </div >
        )
    }
    public render() {
        return (
            <div>
                <SearchBar placeholder="搜索" onChange={this.onChange} maxLength={8} />
                {this.renderListBlock()}
            </div>
        )
    }
}

