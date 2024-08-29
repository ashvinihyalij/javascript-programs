// output should be
/*{
  'Sample 1': [
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 1', data: 'Data1' }
  ],
  'Sample 2': [
    { key: 'Sample 2', data: 'Data2' },
    { key: 'Sample 2', data: 'Data2' }
  ],
  'Sample 3': [ { key: 'Sample 3', data: 'Data1' } ]
}*/
const obj = [
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 2",
        data: "Data2"
    },
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 3",
        data: "Data1"
    },
    {
        key: "Sample 2",
        data: "Data2"
    },
];
const output = {};
obj.forEach((item) => {
    if (output[item.key]) {
        output[item.key].push(item);
    } else {
        output[item.key] = [item];
    }
});
console.log(output)