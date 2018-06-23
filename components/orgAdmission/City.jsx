import { Component } from 'react'
import City from '../../static/region'

export default class Citys extends Component {
    state = {
        citys: City,
        provId: '',
        cityId: '',
        areaId: '',
        cityRender: [],
        areaRender: []
    }

    postState = () => {
        setTimeout(() => {
            this.setState({
                provId: this.refs.prov.value, 
                cityId: this.refs.city.value,
                areaId: this.refs.area.value
            })
            this.props.callback({
                provId: this.refs.prov.value, 
                cityId: this.refs.city.value,
                areaId: this.refs.area.value
            })           
        }, 0)
    }

    changeProv = event => {
        this.setState({provId: event.target.value})
        let cityRender
        for (let i = 0; i < City.length; i++) {
            if (City[i].id == event.target.value) {
                cityRender = City[i].city        
            }
        }
        setTimeout(() => {
            let str = '', str2 = ''
            this.setState({cityRender: cityRender})
            this.state.cityRender.forEach((i, n) => {
                str += `<option value=${ i.id }>${ i.name }</option>`
            })
            this.state.citys.forEach((i, n) => {
                if (i.id == this.state.provId) {
                    i.city[0].area.forEach((a, b) => {
                        str2 += `<option value=${ a.id }>${ a.name }</option>`
                    })
                }
            })
            this.refs.city.innerHTML = str
            this.refs.area.innerHTML = str2
        }, 0)
        this.postState()
    }

    changeCity = event => {
        let city = this.state.cityRender
        let areaRender
        this.setState({cityId: event.target.value})
        for (let i = 0; i < city.length; i++) {
            if (city[i].id == event.target.value) {
                areaRender = city[i].area      
            }
        }
        setTimeout(() => {
            let str = ''
            this.setState({areaRender: areaRender})
            this.state.areaRender.forEach((i, n) => {
                str += `<option value=${ i.id }>${ i.name }</option>`
            })
            this.refs.area.innerHTML = str
        }, 0)
        this.postState()
    }

    changeArea = event => {
        this.setState({areaId: event.target.value})
        this.postState()
    }

    componentDidMount () {
        this.postState()
    }

    render () {
        let opt = () => {
            let arr = []
            return arr.push(this.changeCity)
        }


        return (
            <div className="city-box">
                <style jsx>{`
                    .city-box {
                        margin-left: 20px;
                        display: inline-block;
                    }
                    select {
                        width: 110px;
                        border: 1px solid #ddd;
                        height: 25px;
                        margin-right: 10px;
                    }
                `}</style>
                <select ref="prov" onChange={ this.changeProv }>{this.state.citys.map((i, n) => {
                    return (<option key={i.id} value={ i.id }>{ i.name }</option>)
                })}</select>
                <select ref="city" onChange={ this.changeCity }>{this.state.citys[0].city.map((i, n) => {
                    return (<option key={ i.id } value={ i.id }>{ i.name }</option>)
                })}</select>
                <select ref="area" onChange={ this.changeArea }>{this.state.citys[0].city[0].area.map((i, n) => {
                    return (<option key={ i.id } value={ i.id }>{ i.name }</option>)
                })}</select>              
            </div> 
        )
    }
}