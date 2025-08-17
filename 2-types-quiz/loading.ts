{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;


  function printLoginState (obj: LoadingState | SuccessState | FailState) {
    if(obj.state === 'success') {
      console.log('😃 loaded')
    } else if (obj.state === 'loading') {
      console.log('👀 loading...');
    } else {
      console.log('😱 no network')
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
