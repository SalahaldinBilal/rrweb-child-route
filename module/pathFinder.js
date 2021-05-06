export default class pathFiner{
    constructor(domTree){
        this.changeTree(domTree); //rrweb dom tree
    }

    changeTree(domTree){
        this.tree = domTree;
    }

    findPathForElement(id){
        let finished = false;
        let path = [];
        let currentNode = this.tree.childNodes[1];

        while(!finished){
            for(let i = currentNode.childNodes.length - 1; i >= 0; i--){
                if(currentNode.childNodes[i].id <= id){
                    currentNode = currentNode.childNodes[i];
                    finished = currentNode.id === id ? true : false;
                    break;
                }
            }
            path.push({id: currentNode.id, attributes: currentNode.attributes, tagName:currentNode.tagName});
        }

        return path;
    }
}