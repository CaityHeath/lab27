
![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## React Testing and Deployment
### Caity Heath

### Links and Resources
* [Repository](https://github.com/CaityHeath/lab27)
* [Travis](https://www.travis-ci.com/CaityHeath/lab27/jobs/173915349)
* [AWS](http://caitycounterbucket.s3-website-us-west-2.amazonaws.com/)
* [Code Sandbox](https://codesandbox.io/s/38wqo4r456)

### Modules
#### `app.js`
##### Exported Values and Methods

###### `App -> class`
---

#### `counter.js`
##### Exported Values and Methods

###### `Counter -> class`
---
#### `header.js`
##### Exported Values and Methods

###### `Header -> class`

---
#### `footer.js`
##### Exported Values and Methods

###### `Footer -> class`
---


### Setup
#### 
* `npm i ` install node dependencies


#### Running the app
* Navigate into the build folder
* `live-server`
* Endpoint: `/`
  * Brings you to an interactive react app in the browser. 

#### Tests
* `npm test`
##### OR
* Open Travis link to see test accuracy and coverage. 
---

* Asserts that the state of the count changes properly.
* Assert that the count state is being transferred to the DOM. 
* Assert DOM stability via snapshot testing.


#### UML
![](assets/IMG_5795.png)