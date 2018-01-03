import React from 'react';
import {Image, View, Text} from 'react-native';
import {Carousel, Flex} from 'antd-mobile';

import style from '../Style'

class Index extends React.Component {

    componentWillMount() {

    }

    render() {
        return (
            <View style={style.container}>
                <Carousel autoplay infinite>
                    <Image style={style.carouselItem} source={require('../image/banner.jpg')}/>
                    <Image style={style.carouselItem} source={require('../image/banner.jpg')}/>
                    <Image style={style.carouselItem} source={require('../image/banner.jpg')}/>
                </Carousel>
                <View style={style.indexCategory}>
                    <Flex>
                        <Flex.Item>
                            <View style={style.indexCategoryItem}>
                                <Image style={style.indexCategoryItemImage} source={require('../image/deliver.png')}/>
                                <Text>分类</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style={style.indexCategoryItem}>
                                <Image style={style.indexCategoryItemImage} source={require('../image/deliver.png')}/>
                                <Text>分类</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style={style.indexCategoryItem}>
                                <Image style={style.indexCategoryItemImage} source={require('../image/deliver.png')}/>
                                <Text>分类</Text>
                            </View>
                        </Flex.Item>
                    </Flex>
                </View>
                <Text>Index</Text>
            </View>
        );
    }
}

export default Index;