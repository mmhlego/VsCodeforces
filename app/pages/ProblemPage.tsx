import React, { useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function ProblemPage() {
  const [page, setPage] = useState('');

  useEffect(() => {
    // ProblemText(problemId)
    //   .then(res => console.log('res', res))
    //   .catch(err => console.log('err', err));

    fetch(`https://codeforces.com/problemset/problem/` + problemId, {
      mode: 'no-cors',
    })
      .then(res => {
        console.log('res', res);
        console.log('res', res.status);
        console.log('res', res.body);
        return res.text();
        // setPage(res);
      })
      .then(html => console.log(html))
      .catch(err => console.log(err));

    // var oReq = new XMLHttpRequest();
    // oReq.onload = ev => console.log(ev);
    // oReq.onerror = ev => console.log(ev);
    // oReq.open('get', `https://codeforces.com/problemset/problem/` + problemId, true);
    // oReq.send();
  }, []);

  return (
    <div>
      Problem id is: "{problemId}"
      <PrimaryButton
        text="Start solving problem"
        onClick={() => {
          VsCode.postMessage({
            type: 'COMMON',
            payload: 'sample message',
          });
        }}
      />
    </div>
  );
}
