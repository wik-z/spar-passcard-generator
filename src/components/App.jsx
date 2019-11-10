import React from 'react';
import { Formik, Form } from 'formik';

import './App.css';
import MemberForm from './MemberForm';
import Preview from './Preview';

import logo from '../assets/logo.png';

class App extends React.Component {
  state = {
    isAllowed: false
  }
  
  componentDidMount() {
    if (this.checkValidity()) {
      this.setState({ isAllowed: true })
    }
  }

  checkValidity() {
    const searchParams = window.location.search.substr(1);
    const paramArray = searchParams.split('=');

    return paramArray[0] === 'auth' && paramArray[1] === '911223f9c169df06ba3eadb6a8f42564c9170237';
  }

  render() {
    if (!this.state.isAllowed) {
      return null;
    }

    return (
      <div className="App">
        <Formik
          initialValues={{
            playerId: '',
            name: '',
            rank: 'PVT',
            branch: 'STF',
            specialization: '',
            payGrade: '',
            issueDate: '',
            picture: null
          }}
        >
          {() => (
            <Form>
              <div className="container">
                <header>
                  <img src={logo} className='logo' alt='spar logo' />
                </header>
                <div className="row">
                  <div className="form-container column">
                    <MemberForm />
                  </div>

                  <div className="result-container column">
                    <Preview />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
