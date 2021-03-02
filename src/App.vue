<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

.form-group {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    
    input {
      width: 100%;
      height: 30px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      background-color: #f3f3f3;
      text-indent: 5px;
      border-radius: 3px;

      &.err {
        background: rgba(255, 0, 0, 0.2);
        border: 1px solid #af1e2d;
      }

      &:focus {
        border: 1px solid #CCC
      }
    }
    button {
      width: 100%;
      height: 30px;
      border: none;
      background-color: rgb(175, 156, 243);
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: 600;
      border-radius: 3px;
    }
    p {
      color: rgb(132, 130, 138);
      text-align: center;
      font-size: 12px;
    }

    .error_msg {
      margin: 15px 0px;
      padding: 10px;
      background-color: rgba(255, 0, 0, 0.2);
      color: #171717;
      font-weight: 700;
      border-radius: 8px;
    }
    
  }
</style>