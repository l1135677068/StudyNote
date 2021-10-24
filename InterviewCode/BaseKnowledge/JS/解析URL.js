url = 'https://www.nowcoder.com/discuss/766807?channel=-1&source_id=profile_follow_post_nctrack'

function parseUrl(url) {
    // 变成数组
    let res = {};
    let arr = url.split('?')[1].split('&');
    for (let item of arr) {
        let [key, value] = item.split('=');
        if (key in res) {
            res[key] = Array.isArray(res[key]) ? res[key].push(value) : [res[key]].push(value);
        } else {
            res[key] = value;
        }
    }
    return res;
}
console.log(parseUrl(url))
