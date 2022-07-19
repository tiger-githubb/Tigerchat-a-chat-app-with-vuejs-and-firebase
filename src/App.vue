<template>
  <div class="view login" v-if="state.username === '' || state.username === null" id="back">
    <form class="login-form" autocomplete="on" @submit.prevent="Login">
      <div class="form-inner">
        <h1>bienvenue sur tigerchat</h1>
        <label for="username">Nom d'utilisateur</label>
        <input type="text" v-model="inputUsername" placeholder="saisir un nom d'utilisateur ... ">
        <input type="submit" value="S'inscrire" />
      </div>
    </form>
  </div>

  <div class="view chat" v-else>
    <header>
      <button class="logout" @click="logout">Se deconnecter </button>
      <h1>Bienvenue,{{ state.username }}</h1>
    </header>
    <section class="chat-box">
      <div v-for="message in state.messages" :key="message.key"
        :class="(message.username == state.username ? 'message current-user' : 'message')">
        <div class="message-inner">
          <div class="username">{{ message.username }}</div>
          <div class="content">{{ message.content }}</div>
        </div>
      </div>
    </section>
      <a href="../find.css"></a>
    <footer>
      <!-- submit.preveint permet de valider un formulaire sans pour autant actualiser la page -->
      <form @submit.prevent="SendMessage">

        <input type="text" v-model="inputMessage" placeholder="Saisir votre message" />
        <input type="submit" value="Envoyer" ><ion-icon name="send"></ion-icon>
      </form>
    </footer>
  </div>

</template>

<script>

import { reactive, onMounted, ref } from 'vue';

import firebase from './firebase';

export default {
  name: 'App',
  setup() {
    //declaration de la variable inputUsername qui va permettre de stocker le nom d'utilisateur 
    const inputUsername = ref("");
    const inputMessage = ref("");
    //declaration de state qui permet de contenir toutes les données de l'application 
    const state = reactive({
      username: "",
      messages: []
    })
    //fonction login avec argument "" c'est a dire l'utilisateur n'a pas encore saisi de données 
    const Login = () => {
      //S'il y a une entrée, elle définit la propriété value de state avec ce qui a été entré et efface sa propre propriété value de sorte qu'elles soient toutes deux définies comme nulles lorsqu'il n'y a pas d'entrée de l'utilisateur.
      if (inputUsername.value != "" || inputUsername.value != null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    }
    //fonction deconnecion
    const logout = () => {
      state.username = "";  // Le code supprime le nom d'utilisateur de l'objet state.
    }


    const SendMessage = () => {
      //obtenir la référence des messages à partir de firebase
      const messagesRef = firebase.database().ref("messages");

      //vérifie s’il existe une valeur inputMessage et si elle n’est pas vide ou nulle.
      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }

      //S’il n’y en a pas, il revient; sinon, il crée un nouvel objet avec le nom d’utilisateur state.username et le contenu de inputMessage . 
      const message = {
        username: state.username,
        content: inputMessage.value
      }
      //envoie du message sur la liste messagesRef en utilisant la méthode push() de la base de données Firebase
      messagesRef.push(message);
      inputMessage.value = "";
    }

    //La fonction qui a été appelée sur mount() sera exécutée une fois le composant monté, c’est-à-dire le moment où il s’affiche.
    onMounted(() => {
      //création d'une référence à la base de données « messages ».
      const messagesRef = firebase.database().ref("messages");

      //écout des modifications apportées à la base de données des messages et met à jour un tableau d’objets avec les données de l’instantané.
      messagesRef.on('value', snapshot => {
        const data = snapshot.val();
        let messages = [];
        //Lorsqu’il reçoit une modification, il crée un objet qui contient toutes ses paires clé-valeur et les pousse dans un tableau appelé état.
        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          });
        });
        //parcourir les données dans firebase et pousser un nouvel objet sur l’état.
        state.messages = messages;
      });
    });

    //La dernière ligne renvoie un objet contenant deux propriétés : inputUsername et Login ainsi que leurs fonctions respectives (inputUsername() et Login()).
    return {
      inputUsername,
      Login,
      state,
      inputMessage,
      SendMessage,
      logout
    }
  }
}
</script>

<style lang="scss">


#back{
	margin:0;
	padding:0;
	font-family:"arial",heletica,sans-serif;
	font-size:12px;
    background: #2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0;
	-webkit-animation: 10s linear 0s normal none infinite animate;
	-moz-animation: 10s linear 0s normal none infinite animate;
	-ms-animation: 10s linear 0s normal none infinite animate;
	-o-animation: 10s linear 0s normal none infinite animate;
	animation: 10s linear 0s normal none infinite animate;
 
}
 
@-webkit-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-moz-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-ms-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-o-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}




* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #000000;

  &.login {
    align-items: center;

    .login-form {
      display: block;
      width: 100%;
      padding: 15px;

      .form-inner {
        display: block;
        background-color: #FFF;
        padding: 50px 15px;
        border-radius: 16px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);

        h1 {
          color: rgb(80, 80, 80);
          font-size: 30px;
          margin-bottom: 30px;
          text-transform : uppercase; 
          display: flex;
          justify-content: center;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #AAA;
          font-size: 16px;
          transition: 0.4s;
        }

        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;

          color: #333;
          font-size: 18px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #F3F3F3;

          transition: 0.4s;

          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: #0d0f61;
          border-radius: 8px;

          color: #FFF;
          font-size: 18px;
          font-weight: 700;
        }

        &:focus-within {
          label {
            color: #ea526f;
          }

          input[type="text"] {
            background-color: #FFF;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }

  &.chat {
    flex-direction: column;

    header {
      position: relative;
      display: block;
      width: 100%;
      padding: 50px 30px 10px;

      .logout {
        position: absolute;
        top: 15px;
        right: 15px;
        appearance: none;
        border: none;
        outline: none;
        padding: 10px 15px;
        background-color: red;
        border-radius: 20px 20px 20px 20px;
   

        color: #FFF;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: right;
      }

      h1 {
        color: #FFF;
      }
    }

    .chat-box {
      border-radius: 30px 30px 0px 0px;
      background-color: #272a37;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      flex: 1 1 100%;
      padding: 30px;

      .message {
        display: flex;
        margin-bottom: 15px;

        .message-inner {
          .username {
            color: #888;
            font-size: 16px;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
          }

          .content {
            display: inline-block;
            padding: 10px 20px;
            background-color: #424656;
            border-radius: 999px;

            color: white;
            font-size: 18px;
            line-height: 1.2em;
            text-align: left;
          }
        }

        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;

          .message-inner {
            max-width: 75%;

            .content {
              color: #FFF;
              font-weight: 600;
              background-color: #1d90f5;
            }
          }
        }
      }
    }

    footer {
      position: sticky;
      bottom: 0px;
      background-color: #FFF;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);

      form {
        display: flex;

        input[type="text"] {
          flex: 1 1 100%;

          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 15px 15px;
          border-radius: 20px 20px 20px 20px;
          margin-right: 15px;

          color: #333;
          font-size: 18px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #eeeeee;

          transition: 0.4s;

          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          padding: 10px 15px;
          border-radius: 20px 20px 20px 20px;

          background-color: #1d90f4;

          color: #FFF;
          font-size: 18px;
          font-weight: 700;
        }


        input[type="submit"]:target {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          padding: 10px 15px;
          border-radius: 0px 8px 8px 0px;

          background-color: #861a2e;

          color: #FFF;
          font-size: 18px;
          font-weight: 700;
        }

      }
    }
  }
}
</style>
