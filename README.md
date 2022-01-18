Ee# Groupe de casena_b 948971

Pour faire tourner le projet, l'initialiser en local au nom de "EcohubFront" avant de pull afin de générer l'environnement de dev ignoré par git.

Initialiser la base côté SQL au nom de "EcohubFront": <br>
CREATE DATABASE EcohubFront;

Editer le .env dans EcohubFront en conséquence :

DB_PORT=3306                <br>
DB_DATABASE=EcohubFront     <br>
DB_USERNAME=root            <br>    
DB_PASSWORD=                <br>

Puis remplir la base avec la commande : <br>
php artisan db:seed

php artisan serve pour faire tourner l'appli sur le port 8000

identifiant de connection : <br>
email : JeanLuser@gmail.com <br>
password : 11111111