<template>
<div class="container">
  <div class="leftbox">
    <nav>
      <a id="dashboard"><i class="fas fa-tachometer-alt"></i></a>
      <a id="profile"> <i class="fas fa-user"></i> </a>
      <a id="settings"> <i class="fas fa-cog"></i> </a>
      <a id="messages"> <i class="fas fa-comments"></i> </a>
      <a id="notification"> <i class="fas fa-bell"></i> </a>
    </nav>
  </div>
  <div class="rightbox">
    <div class="rb-container">
      <ul class="rb">
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
           2018
          </div>
          <div class="item-title">Teaching Math in Guyana</div>

        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            Summer 2021
          </div>
          <div class="item-title">Covering Spaces Summer Project.</div>

        </li>

        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            Summer 2022
          </div>
          <div class="item-title">Shief Theory Summer Project</div>

        </li>
        
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            Summer 2023
          </div>
          <div class="item-title">Morse Summer Project</div>
        </li>
           
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            July 16th, 2023
          </div>
          <div class="item-title">LMS</div>
        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            March 10th, 2024
          </div>
          <div class="item-title">IMA TMT Presentation</div>
        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            Sep 1st, 2024
          </div>
          <div class="item-title">PhD in algebraic geometry and category theory</div>
        </li>

      </ul>

    </div>
  </div>
</div>
  </template>
  
  <script>
  
  export default {
    name: "HelloWorld",
    data() {
      return {
      };
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import '~/components/Timeline';
  </style>
  