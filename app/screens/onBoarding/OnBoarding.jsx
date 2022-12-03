import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//components
import PageContainer from './PageContainer';

//paths
import * as routes from '../../../constants/routes';

//onboarding images
const onboarding1 = require('../../../assets/onboarding1.jpg');
const onboarding2 = require('../../../assets/onboarding2.jpg');
const onboarding3 = require('../../../assets/onboarding3.jpeg');

export default function OnBoarding({ navigation }) {
    const [page, setPage] = useState(1);

    const nextHandler = () => {
        if(page === 3){
            navigation.navigate(routes.getStarted)
        }else{
            setPage(prev => prev + 1)
        }
    }

    let container;

    if(page === 1){
        container = <PageContainer
            img={onboarding1}
            context={'Discover delicious food from the amazing restaurants near you'}
            onNext={nextHandler}
            id={1}
        />
    }else if(page === 2){
        container = <PageContainer
            img={onboarding2}
            context={'Fresh and delicious local food delivered from the restaurants to your doorstep'}
            onNext={nextHandler}
            id={2}
        />
    }else if(page === 3){
        container = <PageContainer
            img={onboarding3}
            context={'Grab the best deals and discounts around and save on your every order'}
            onNext={nextHandler}
            id={3}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            {container}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})