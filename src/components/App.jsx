import React from 'react';
import { Formik, Form } from 'formik';

import './App.css';
import MemberForm from './MemberForm';
import Preview from './Preview';

import logo from '../assets/logo.png';

class App extends React.Component {
  render() {
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
