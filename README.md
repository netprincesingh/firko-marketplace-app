Welcome to docs of Firko App
============================


This app mainly contains 4 pages
1. Home
2. Post (Users can post their products)
3. Browse (Where users can search for specific product or services)
4. Product details (Where users can see the in depth details of product or services)


Home
----
<img src="https://github.com/netprincesingh/firko-marketplace-app/blob/main/screenshots/home.jpg" width="300" height="700" alt="Description">

Menu
----
<img src="https://github.com/netprincesingh/firko-marketplace-app/blob/main/screenshots/menu.jpg" width="300" height="700" alt="Description">

Post
----
<img src="https://github.com/netprincesingh/firko-marketplace-app/blob/main/screenshots/post.jpg" width="300" height="700" alt="Description">


Browse
------
<img src="https://github.com/netprincesingh/firko-marketplace-app/blob/main/screenshots/browse.jpg" width="300" height="700" alt="Description">

<img src="https://github.com/netprincesingh/firko-marketplace-app/blob/main/screenshots/detail.jpg" width="300" height="700" alt="Description">



In detail Explanation
======================

### Hierarchy 

- index.js (entry point of this app)
    - App.tsx (root component of this app) It contains drawer navigation
        - screens/home.tsx (home page)
        - screens/post.tsx (post page)
        - screens/browse/ 
            - browse.tsx (contain Stack Navigation)
            - ProductList.tsx (Product list implementation)
            - ProductDetailScreen.tsx (Details of each product)

















