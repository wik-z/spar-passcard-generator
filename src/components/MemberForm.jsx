import React from 'react';
import { connect, Field } from 'formik';
import ImageUploader from 'react-images-upload';
import FieldContainer from './FieldContainer';

import './MemberForm.css';

class MemberForm extends React.Component {
    constructor(props) {
        super(props);

        this.initFileReader();
    }

    initFileReader() {
        this.fileReader = new FileReader();
        this.fileReader.onload = this.handleFileRead.bind(this);
    }

    handleFileRead(e) {
        const img = new window.Image();

        if(e.target.readyState === FileReader.DONE) {
            img.src = e.target.result;
            img.onload = () => {
                const { setFieldValue } = this.props.formik;
                setFieldValue('picture', img);
            };
        }
    }

    render() {
        const { setFieldValue } = this.props.formik;

        return (
            <div className='form-inner'>
                <FieldContainer>
                    <label>Picture:</label>
                    <ImageUploader
                        buttonText="Upload a picture"
                        label="Max file size: 5 MB"
                        onChange={(pictures) => {
                            const file = pictures[0];

                            if (!file) {
                                return setFieldValue('picture', null);
                            }

                            this.fileReader.readAsDataURL(file);
                        }}
                        withPreview
                        singleImage
                    />
                </FieldContainer>
                <FieldContainer>
                    <label>Name:</label>
                    <Field type='text' name='name' placeholder='Insert name...' />
                </FieldContainer>
                <FieldContainer>
                    <label>Rank:</label>
                    <Field as='select' name='rank'>
                        <option value='PVT'>Private</option>
                        <option value='PV2'>Private Second Class</option>
                        <option value='PFC'>Private First Class</option>
                        <option value='CPL'>Corporal</option>
                        <option value='SGT'>Sergeant</option>
                        <option value='1LT'>Lieutenant</option>
                        <option value='CPT'>Captain</option>
                        <option value='MAJ'>Major</option>
                        <option value='LCT'>Lieutenant Colonel</option>
                        <option value='COL'>Colonel</option>
                    </Field>
                </FieldContainer>
                <FieldContainer>
                    <label>Branch:</label>
                    <Field as='select' name='branch'>
                        <option value='STF'>SPAR Task Force</option>
                        <option value='SSO'>SPAR Special Ops</option>
                        <option value='SAF'>SPAR Air Force</option>
                    </Field>
                </FieldContainer>
                <FieldContainer>
                    <label>Specialization:</label>
                    <Field type='text' name='specialization' placeholder='Insert specialization...' />
                </FieldContainer>
                <FieldContainer>
                    <label>Pay Grade:</label>
                    <Field type='text' name='payGrade' placeholder='Set pay grade...' />
                </FieldContainer>
                <FieldContainer>
                    <label>Issue Date:</label>
                    <Field type='text' name='issueDate' placeholder='Set issue date...' />
                </FieldContainer>
            </div>
        );
    }
}

export default connect(MemberForm);