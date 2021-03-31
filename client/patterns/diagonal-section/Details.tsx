/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.DiagonalSection}>
            <Helmet>
                <meta name="description" content="Create a diagonal section with CSS" />
                <meta name="keywords" content="css diagonal section, css transform skew" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    /* Used to position the diagonal area */
    position: relative;
">
    <!-- The diagonal area -->
    <div style="
        /* Absolute position */
        left: 0px;
        position: absolute;
        top: 0px;

        /* Take full size */
        height: 100%;
        width: 100%;

        /* Create diagonal sides */
        transform: skewY(-5deg);

        /* Background color */
        background-color: rgba(0, 0, 0, 0.3);

        /* Displayed under the main content */
        z-index: -1;
    " />

    <!-- Content -->
    ...
</div>
`}
css={``}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '200px',
                                justifyContent: 'center',
                                position: 'relative',
                                width: '75%',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    height: '100%',
                                    left: 0,
                                    position: 'absolute',
                                    top: 0,
                                    transform: 'skewY(-5deg)',
                                    width: '100%',
                                    zIndex: -1,
                                }}
                            />
                            <div style={{ width: '60%' }}>
                                <Block backgroundColor='#fff' justify='center' numberOfBlocks={5} />
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CurvedBackground]} />
        </DetailsLayout>
    );
};

export default Details;
