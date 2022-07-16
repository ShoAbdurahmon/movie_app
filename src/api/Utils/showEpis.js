function showEpis (files){
    const obj = {}
    let num1 = 1
    for(let i in files){
        let num2 = 1
        for(let j in files){
            let show = "s" + num1 + "e" + num2
            if(show == j){

            }
            num2 += 1
        }
        num1 += 1
    }
}

showEpis({"s1e1": { mimitype: "audio"}, "s1e2": {},"s1e3": {},"s1e4": {},"s2e1": {},"s2e2": {},"s2e3": {},"s2e4": {}})