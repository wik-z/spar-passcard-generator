import React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { connect } from 'formik';
import QRCode from 'qrcode.react'
import URLImage from './UrlImage';

import logo from '../assets/logo.png';
import stfLogo from '../assets/stf-logo.png';
import ssoLogo from '../assets/sso-logo.png';
import safLogo from '../assets/saf-logo.png';
import chip from '../assets/sim-chip.png';

import './Preview.css';

const branchLogoMap = {
    STF: stfLogo,
    SSO: ssoLogo,
    SAF: safLogo
}

class Preview extends React.Component {
    getQrCodeCanvas() {
        // unfortunately gotta fall back to browser API
        return document.querySelector('.qrcode-container > canvas');
    }

    getDownloadLink() {
        // same, just easier
        const canvas = document.querySelector('div.konvajs-content > canvas');

        if (!canvas) return '';

        const content = canvas.toDataURL('image/png');
        return `data:application/octet-stream;base64,${content}`;
    }

    render() {
        const { values } = this.props.formik;
        const qrCodeCanvas = this.getQrCodeCanvas();

        return (
            <div className='preview-inner'>
                <h2>Preview:</h2>
                <div className='qrcode-container'>
                    <QRCode value={`https://spar-arma.com/member/${values.name.toLowerCase()}`} />
                </div>

                <Stage ref={this.canvasRef} width={400} height={600}>
                    <Layer>
                        <Rect width={400} height={600} cornerRadius={20} fill="white" />
                        {/* Member Picture */}
                        {values.picture && <Image
                            x={20}
                            y={20}
                            width={160}
                            height={260}
                            image={values.picture}
                        />}
                        {/* Member name */}
                        {values.name !== '' && <Text
                            x={20}
                            y={290}
                            text={values.name.toUpperCase()}
                            fontSize={28}
                            fontStyle='bold'
                            fontFamily='Montserrat'
                        />}
                        {/* Member rank label */}
                        {values.picture && <Text
                            x={20}
                            y={330}
                            text={'Rank:'}
                            fontSize={14}
                            fill='#aaa'
                            fontFamily='Open Sans'
                        />}
                        {/* Member rank */}
                        {values.name !== '' && <Text
                            x={20}
                            y={345}
                            text={values.rank}
                            fontSize={20}
                            fontStyle='bold'
                            fontFamily='Montserrat'
                        />}

                        {values.picture && <URLImage
                            src={chip}
                            width={100}
                            height={85}
                            x={20}
                            y={380}
                        />}

                        {qrCodeCanvas && <Image
                            image={qrCodeCanvas}
                            width={100}
                            height={100}
                            x={20}
                            y={480}
                        />}

                        {/* SPAR TITLE */}
                        {values.picture && <Text
                            x={200}
                            y={30}
                            width={180}
                            text="S.P.A.R."
                            align="center"
                            fontStyle="bold"
                            fontSize={26}
                            fontFamily='Montserrat'
                        />}
                        {/* SPAR LOGO */}
                        {values.picture && <URLImage
                            src={logo}
                            x={210}
                            y={70}
                            width={160}
                            height={160}
                        />}
                        {/* DIVISION TITLE */}
                        {values.picture && <Text
                            x={200}
                            y={245}
                            width={180}
                            text={`${values.branch} BRANCH`}
                            align="center"
                            fontStyle="bold"
                            fontSize={18}
                            fontFamily='Montserrat'
                        />}

                        {values.picture && <URLImage
                            src={branchLogoMap[values.branch]}
                            x={265}
                            y={270}
                            width={50}
                            height={83}
                        />}

                        {/* Member specialization label */}
                        {values.picture && <Text
                            x={140}
                            y={380}
                            text={'Specialization:'}
                            fontSize={14}
                            fill='#aaa'
                            fontFamily='Open Sans'
                        />}
                        {/* Member specialization  */}
                        {values.specialization !== '' && <Text
                            x={140}
                            y={400}
                            text={values.specialization}
                            fontSize={20}
                            fontStyle='bold'
                            fontFamily='Montserrat'
                        />}

                        {/* Member pay grade label */}
                        {values.picture && <Text
                            x={140}
                            y={440}
                            text={'Pay Grade:'}
                            fontSize={14}
                            fill='#aaa'
                            fontFamily='Open Sans'
                        />}
                        {/* Member pay grade  */}
                        {values.payGrade !== '' && <Text
                            x={140}
                            y={460}
                            text={values.payGrade}
                            fontSize={20}
                            fontStyle='bold'
                            fontFamily='Montserrat'
                        />}

                        {/* Member issue date label */}
                        {values.picture && <Text
                            x={140}
                            y={500}
                            text={'Issue date:'}
                            fontSize={14}
                            fill='#aaa'
                            fontFamily='Open Sans'
                        />}
                        {/* Member issue date  */}
                        {values.issueDate !== '' && <Text
                            x={140}
                            y={520}
                            text={values.issueDate}
                            fontSize={20}
                            fontStyle='bold'
                            fontFamily='Montserrat'
                        />}

                        {values.picture && <Text 
                             x={140}
                             y={556}
                             width={240}
                             text={'Property of SPAR Tactical Group\nwww.spar-arma.com'}
                             fontSize={11}
                             align='center'
                             fill='#ccc'
                             fontFamily='Montserrat'
                        />}
                    </Layer>
                </Stage>
                <p>Right click -> Save image as... to save it as PNG!</p>
            </div>
        );
    }
}

export default connect(Preview);