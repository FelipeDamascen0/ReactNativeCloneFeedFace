import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    TouchableOpacity,
    SafeAreaView,
    Image,
    ImageBackground,
} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stories = (props) => {
    return(
         <ImageBackground  
            source={props.foto} 
            style={styles.styleStories}  
        >
                <View style={styles.photoStories}>
                    <Image source={props.perfil} style={{borderRadius:500,width: 40,height: 40,}}/>
                </View>

                <View style={styles.nomePerfil}>
                    <Text style={{color: '#fff'}}>
                        Nome Do perfil
                    </Text>
                </View>
        </ImageBackground>
    );
}

const Feed = () => {
    return(
        <View>
            <View style={styles.feed}/*AREA NO QUE ESTA PENSANDO*/>
                <View style={styles.photo}>
                    <Image source={require('./imagens/p6.jpg')} style={{borderRadius:500,width: 40,height: 40,}}/>
                </View>
                <View style={styles.alignInput}>
                    <Text style={styles.nomeFeed}>
                        Nome do perfil
                    </Text>

                    <Text style={{fontSize:15, color: '#ADADAD'}}>
                        Ontem ás 22:59 <Icon name="users" size={15} />
                    </Text>
                </View>
            </View>

            <View style={{marginLeft:15}}>
                <Text style={{fontSize:15, color: '#fff', marginBottom:10}}>
                    Texto da postagem
                </Text>
            </View>

            <View>
                <Image source={require('./imagens/1.png')} style={{width: '100%', height:400}}/>
                <View style={styles.feedBack}>
                    <View style={styles.iconHearth}>
                        <Icon name="heart" size={12} color="#fff"/>
                    </View>
                    <Text style={{marginTop:10, marginLeft:9, fontSize: 16, color:'#ADADAD'}}>
                        88
                    </Text>

                    <Text  style={{marginTop:10, marginLeft:100, fontSize: 14, color:'#ADADAD'}}>
                        1 comentario - 3 compartilhamento
                    </Text>
                </View>

                <View style={styles.darFeedBack}>
                    <Text style={styles.styleDarFeedBack}>
                        <Icon name="star" size={15} style={{paddingRight:10}}/>
                        Curtir
                    </Text>

                    <Text  style={styles.styleDarFeedBack}>
                        <Icon name="comment" size={15}/>
                        Comentar
                    </Text>

                    <Text  style={styles.styleDarFeedBack}>
                        <Icon name="share" size={15} />
                        compartilhar
                    </Text>
                </View>
            </View>
        </View>
    );
}

const App = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.areaView}>
                <View style={styles.logo}/*VIEW PARTE DA LOGO E BUSCA*/>
                    <Text style={styles.textLogo}>
                        Facebook
                    </Text>
                    <View  style={styles.icons}>
                        <TouchableOpacity>
                            <Icon name="search" size={25} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.icons}>
                        <TouchableOpacity>
                            <Icon name="comment" size={25} color="#000"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.iconsInteraction} /* AREA DOS ICONES ABAIXO DO LOGO */>
                    <Icon name="home" size={35} color="#1473FA" style={styles.styleIconHome}/>
                    <Icon name="users" size={25} color="#fff" style={styles.styleIconUsers}/>
                    <Icon name="tv" size={35} color="#fff" style={styles.styleIconsInteraction}/>
                    <Icon name="suitcase" size={35} color="#fff" style={styles.styleIconsInteraction}/>
                    <Icon name="bell-o" size={35} color="#fff" style={styles.styleIconsInteraction}/>
                    <Icon name="navicon" size={35} color="#fff" style={styles.styleIconsInteraction}/>
                </View>

                <View style={styles.pensando}/*AREA NO QUE ESTA PENSANDO*/>
                    <View style={styles.photo}>
                    <Image source={require('./imagens/p6.jpg')} style={{borderRadius:500,width: 40,height: 40,}}/>
                    </View>
                    <View style={styles.alignInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="No que você está pensando?"
                            placeholderTextColor="#fff"
                        />
                    </View>
                </View>

                <View style={styles.criarConteudo} /* AREA 3 ICONES AO VIVO FOTO E SALA */>
                    <Text style={styles.styleIconsConteudo}>
                        <Icon name="video-camera" size={20} color="#F42828" />
                        Ao vivo
                    </Text>

                    <Text style={styles.styleIconPhoto}>
                        <Icon name="photo" size={20} color="#56D22C"/>
                        Foto
                    </Text>
                    
                    <Text style={styles.styleIconsConteudo}>
                        <Icon name="video-camera" size={20} color="#A82CD2" />
                        Sala
                    </Text>
                </View>

                <View style={styles.stories}>
                    <ScrollView horizontal={true}>
                        <Stories foto= {require('./imagens/3.jpg')} perfil= {require('./imagens/p1.jpg')}/>
                        <Stories foto= {require('./imagens/2.jpg')} perfil= {require('./imagens/p2.jpg')}/>
                        <Stories foto= {require('./imagens/4.jpg')} perfil= {require('./imagens/p3.jpg')}/>
                        <Stories foto= {require('./imagens/5.jpg')} perfil= {require('./imagens/p4.jpg')}/>
                        <Stories foto= {require('./imagens/6.jpg')} perfil= {require('./imagens/p5.jpg')}/>
                    </ScrollView>
                </View>

                <View style={styles.feedPost}>
                    <ScrollView >
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    styleDarFeedBack:{
        paddingRight: 25,
        paddingLeft:25,
        justifyContent: 'center',
        alignItems: 'center',
        color:"#ADADAD",
        fontSize: 16
    },

    darFeedBack:{
        marginTop:12,
        marginBottom:12,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom:10,
        borderBottomWidth: 12,
        borderBottomColor: '#4F4F4F',
        justifyContent: 'center'
    },

    nomeFeed:{
        fontSize:15, 
        fontWeight: 'bold', 
        color: '#fff',
    },

    iconHearth:{
        marginTop:10,
        borderWidth: 1,
        borderColor:'#fff',
        borderRadius:500,
        width: 25,
        height: 25,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor:"#E81B1B"
    },

    feedBack:{
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom:10,
        borderBottomWidth: 2,
        borderBottomColor: '#4F4F4F',
    },

    feed:{
        flexDirection: 'row',
        paddingLeft: 10,
    },

    nomePerfil:{
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },

    photoStories:{
        marginTop:15,
        marginBottom:15,
        marginLeft: 15,
        borderWidth: 1,
        borderColor:'#000',
        borderRadius:500,
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },

    styleStories:{
        height: 230,
        width: 120,
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius:15,
    },

    stories:{
        flexDirection: 'row',
        borderTopWidth: 9,
        borderTopColor: '#4F4F4F',
        borderBottomWidth: 12,
        borderBottomColor: '#4F4F4F',
    },

    styleIconsConteudo:{
        paddingLeft: 30,
        paddingRight: 30,
        color: '#fff',
        fontSize: 15,
    },

    styleIconPhoto:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        color: '#fff',
        fontSize: 15
    },

    criarConteudo:{
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom:20 
    },

    alignInput:{
        width: '80%',
        marginLeft:15,
        justifyContent:'center',
        marginTop:15,
        marginBottom: 15
    },

    input:{
        borderWidth: 1,
        borderColor:'#fff',
        borderRadius:500,
        height:40,
        paddingLeft:15,
        fontSize: 15
    },

    photo:{
        marginTop:15,
        marginBottom:15,
        borderWidth: 1,
        borderColor:'#000',
        borderRadius:500,
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },

    pensando:{
        flexDirection: 'row',
        paddingLeft: 10,
        borderWidth: 1,
        borderTopColor: '#4F4F4F',
        borderBottomColor:'#4F4F4F'
    },

    areaView:{
        backgroundColor:'#3D3D3D',
    },

    logo:{
        flexDirection: 'row',
        marginTop: 30,
    },

    iconsInteraction:{
        flexDirection: 'row',
        marginTop: 15,
        marginLeft:8
    },

    styleIconsInteraction:{
        width:'17%',
        textAlign: 'center',
    },

    styleIconHome:{
        width: '17%',
        borderBottomWidth: 2,
        borderBottomColor: '#1473FA',
        textAlign: 'center',
        paddingBottom:10
    },

    styleIconUsers:{
        width:'17%',
        borderWidth: 1,
        borderColor:'#fff',
        borderRadius:500,
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor:'#4F4F4F',
        paddingTop:5,
        marginLeft: 10,
        marginRight: 10
    },

    textLogo:{
        paddingLeft:10,
        fontSize:30,
        width:'75%',
        fontWeight:'bold',
        color: '#1473FA',
    },

    icons:{
        borderWidth: 1,
        borderColor:'#4F4F4F',
        marginRight:10,
        borderRadius:500,
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4F4F4F'
    }
})

export default App;
