import { test, expect } from '@playwright/test';
test('API test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.json());
    expect(response.status()).toBe(200);
    const data = await response.json();
}
)

test('API test with POST method', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'My First API',body: 'Learning API testing'},
        headers: {Accept: 'application/json'}
    }
  );
    console.log(await response.json());
    expect(response.status()).toBe(201);
    var res= await response.json();
    console.log(res.id);
  
});

test('API test with PUT method', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',
        {
            data:{ "title": "My First API", "body": "Learning API's testing"},
            headers: {Accept: 'application/json'}
        }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
   
})
test('API test with DELETE method', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.json());
    expect(response.status()).toBe(200);
    
});