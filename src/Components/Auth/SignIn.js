import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Toplogobox from '../UI/Layout/Toplogobox'
import googleIC from '../../Icons/google_black.png'
import instagramIC from '../../Icons/instagram_black.png'
import { login, logout } from '../../redux/actions/user'
import { ThemeContext } from '../../Contexts/Theme'
import { Form, FormGroup, Label, Input,FormText } from 'reactstrap';


export class ConnetedSignIn extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.props.dispatch(logout());

        this.state = {
            email: '',
            password: '',
            submitted: false,
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({ submitted: true })
        const { email, password } = this.state
        const { dispatch } = this.props;
        if (email && password) {
            await dispatch(login(email, password));
            if(this.props.loggedIn)
                {this.props.history.push(`/profile/${this.props.user.id}`)}
            } 
        
    }


    render() {
        // setting themecontext
        const { loggingIn } = this.props;
        const {email,password,submitted} = this.state
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="Post_container" style={{ background: theme.low, color: theme.high }}>
                <Toplogobox />

                <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
                {submitted&& !this.props.loggedIn&&
                    <p className="text-danger" >Login In Fail</p >
                 }
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        
                        <Input invalid={!email&&submitted&&true} style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} type="email" id="email" onChange={this.handleChange} />
                        
                        {submitted && !email &&
                            <p className="text-danger" >* Email is required</p >
                        }

                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input invalid={!password&&submitted&&true} style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} type="password" id="password" onChange={this.handleChange} />
                        {submitted && !password &&
                            <p className="text-danger" >* Password is required</p >
                        }
                    </FormGroup>

                    <div className="input-field d-flex justify-content-center">
                        <button className="transparent_btn grey-text " id="login_btn"
                        > Log In
                        </button>
                        <div>

                        </div>
                    </div>

                </Form>


                <div className="justify-content-center d-flex">
                    <div style={{ backgroundImage: `url(${theme.img})` }} className="login_icons"  >
                        <img className="icons15 margin1 blur" src={googleIC} alt="googleIC" />
                    </div>
                    <div style={{ backgroundImage: `url(${theme.img})` }} className="login_icons">
                        <img className="icons15 margin1 blur" src={instagramIC} alt="instagramIC" />
                    </div>
                </div>

                <i class="material-icons justify-content-center d-flex">remove</i>
                <p className="d-flex justify-content-center">Don't have an account? </p>
                <Link className="d-flex justify-content-center" to='/signup'>Sign up</Link>


            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state.auth
    };
}


const SignIn = connect(mapStateToProps)(ConnetedSignIn)

export default SignIn

