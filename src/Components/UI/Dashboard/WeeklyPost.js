  
import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Weekly = ({ post }) => {

    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    <Card style={{background: theme.low, borderColor:theme.high}}>
                        <CardImg top width="100%" src='' alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="bold">123</CardTitle>
                            <CardSubtitle >123</CardSubtitle>
                            <br />
                            <a href="/blog/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{background:theme.highlight}}>View more</Button></a>
                        </CardBody>
                    </Card>
                </div>) }}
        </ThemeContext.Consumer>
    )
}

const WeeklyPost = ({ post }) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return(
        <div className="margin1">
            <h5 style={{color:theme.high}} className="d-flex justify-content-center">This week's best post</h5>
            {/* <Weekly post={post} key={post.id} /> */}
        </div>)}}
        </ThemeContext.Consumer>
    )
}

export default WeeklyPost