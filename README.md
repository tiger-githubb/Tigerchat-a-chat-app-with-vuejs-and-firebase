# tigerchat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Tigerchat-a-chat-app-with-vuejs-and-firebase
# Tigerchat-a-chat-app-with-vuejs-and-firebase
-----------------------------------------------------------------------------

app.vue script : 
<script>

import { reactive, onMounted, ref } from 'vue';
// import db from './db';

export default {
  name: 'App',
  setup() {
    //declaration de la variable inputUsername qui va permettre de stocker le nom d'utilisateur 
    const inputUsername = ref("");
    //declaration de state qui permet de contenir toutes les données de l'application 
    const state = reactive({
      username: "",
    })
    //fonction login avec argument "" c'est a dire l'utilisateur n'a pas encore saisi de données 
    const Login = () => {
      //S'il y a une entrée, elle définit la propriété value de state avec ce qui a été entré et efface sa propre propriété value de sorte qu'elles soient toutes deux définies comme nulles lorsqu'il n'y a pas d'entrée de l'utilisateur.
      if (inputUsername.value != "" || inputUsername.value != null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    }
    //La dernière ligne renvoie un objet contenant deux propriétés : inputUsername et Login ainsi que leurs fonctions respectives (inputUsername() et Login()).
    return {
      inputUsername,
      Login,
      state
    }
  }
}
</script>


Le code commence par la déclaration d'une variable appelée inputUsername.
 Elle est utilisée pour stocker le nom d'utilisateur que l'utilisateur saisit dans le champ de texte.
 Le code déclare ensuite une autre variable appelée state, qui sera utilisée pour contenir toutes les données de cette application.
 Ensuite, il définit une fonction appelée Login().
 Cette fonction prend l'argument "", ce qui signifie que l'utilisateur n'a pas encore saisi de données.
 S'il y a une entrée, elle définit la propriété value de state avec ce qui a été entré et efface sa propre propriété value de sorte qu'elles soient toutes deux définies comme nulles lorsqu'il n'y a pas d'entrée de l'utilisateur.
 La dernière ligne renvoie un objet contenant deux propriétés : inputUsername et Login ainsi que leurs fonctions respectives (inputUsername() et Login()).
 Le code est une fonction qui prend en entrée un nom d'utilisateur et renvoie un état.
 Le code ci-dessus a deux fonctions, la première fonction est appelée Login() qui accepte un nom d'utilisateur en entrée et définit la valeur de l'état comme étant ce qui est tapé dans le champ de saisie.
 La deuxième fonction s'appelle InputUsername(), elle ne reçoit aucun argument et renvoie une chaîne de caractères à partir de l'attribut ref.

Traduit avec www.DeepL.com/Translator (version gratuite)