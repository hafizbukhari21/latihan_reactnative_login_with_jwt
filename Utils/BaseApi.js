import Axios from 'axios'

export const BaseUrl = Axios.create({
    baseURL:'http://sheltered-reaches-95604.herokuapp.com/api'
})