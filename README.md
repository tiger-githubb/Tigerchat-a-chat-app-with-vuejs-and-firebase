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

 Le code commence par importer le réactif et onMounted à partir de Vue.
 Ensuite, il déclare deux variables, inputUsername et inputMessage, qui sont toutes deux des références à des objets en état.
 La fonction setup() est l’endroit où tout le code de cette application ira.
 La première chose qui se passe dans setup() est une déclaration d’une variable appelée inputUsername qui sera utilisée pour stocker le nom d’utilisateur entré par l’utilisateur dans sa page de profil.
 Cette variable est ensuite référencée à l’aide de ref(«  »).
 Ensuite, il y a une déclaration d’une autre variable appelée inputMessage qui sera utilisée pour stocker tous les messages renvoyés par Firebase lorsque quelqu’un vous envoie un message instantané ou une demande de chat via votre application.
 Cette variable est également référencée à l’aide de ref(«  »).
 Vient ensuite la définition de l’état qui contient deux propriétés : nom d’utilisateur et messages.
 La propriété username stocke tout ce qui a été tapé dans votre page de profil tandis que les messages stockent tous les messages entrants ou les demandes de chat reçues de Firebase (s’ils ne sont pas déjà stockés dans inputsMessage).
 Le code est un extrait de code qui déclare les variables inputUsername et inputMessage.
 La fonction setup() crée ces deux variables et les affecte aux refs.
 La fonction setup() déclare alors l’état qui sera déclaré comme réactif.
 Cela signifie qu’il contiendra toutes les données de cette application, y compris le nom d’utilisateur et les messages.
 Le code commence par déclarer une fonction appelée déconnexion.
 Cette fonction est utilisée pour se déconnecter de l’application.
 La ligne suivante déclare une variable appelée state qui sera utilisée pour stocker des informations sur le compte de l’utilisateur dans Firebase.
 La ligne suivante crée un objet appelé SendMessage qui a une méthode, sendMessage().
 Cette méthode envoie des messages à l’aide de la base de données firebase et renvoie true si elle réussit ou false dans le cas contraire.
 Le code est un exemple d’utilisation de la bibliothèque Firebase.
 Le code ci-dessus déconnectera l’utilisateur en effaçant son nom d’utilisateur de l’objet d’état.
 Le code commence par créer un nouvel objet appelé message avec le nom d’utilisateur state.username et le contenu de inputMessage.value .
 Ensuite, il envoie ce message à la liste messagesRef en utilisant push() sur Firebase.
 Le inputMessage est effacé afin qu’il n’apparaisse plus dans les futurs appels à push() .
 Le code commence par créer un nouvel objet appelé message avec le nom d’utilisateur state.username et le contenu de inputMessage.value .
 Ensuite, il envoie ce message à la liste messagesRef en utilisant push() sur Firebase.
 Le inputMessage est effacé afin qu’il n’apparaisse plus dans les futurs appels à push() .
 Le code est utilisé pour mettre à jour l’état de l’utilisateur.
 S’il n’y a pas de nom d’utilisateur, il retournera non défini; sinon, il créera un nouvel objet avec le nom « state.username » et la valeur d’inputMessage comme contenu.
 Il envoie ensuite ce message sur la liste messagesRef en utilisant la méthode push() de la base de données Firebase en passant un nouvel objet appelé message .
 Le code ci-dessus efface également la valeur d’inputMessage afin qu’elle puisse être réutilisée à d’autres fins.
 Le code commence par appeler la fonction onMounted() qui est définie dans la classe.
 Cette fonction sera exécutée une fois le composant monté, c’est-à-dire lorsqu’il sera affiché à l’utilisateur.
 La ligne suivante crée une référence à une base de données appelée messages, puis écoute les modifications apportées à cette base de données et met à jour une table d’objets avec ces modifications.
 Le code est un extrait de code destiné à mettre à jour la table des messages dans la base de données.
 Le code crée d’abord une référence à la table des messages dans la base de données, puis écoute les modifications apportées à cette table, qui seront utilisées ultérieurement lors de la mise à jour d’un objet avec les données de l’instantané.
 Le code commence par la création d’un objet appelé messages.
 Cet objet contiendra toutes les paires clé-valeur qui se trouvent dans la variable de données.
 Le code parcourt ensuite chacune de ces paires clé-valeur et les pousse dans un nouveau tableau appelé messages.
 La ligne suivante crée une variable d’état appelée messages qui est définie pour être égale au tableau d’objets nouvellement créé, messages.
 Le code parcourt les clés d’un objet et envoie un nouvel objet avec des paires clé-valeur au tableau de messages.
 Le code parcourt les ID de tous les objets de firebase et envoie un nouvel objet sur le tableau state.messages.