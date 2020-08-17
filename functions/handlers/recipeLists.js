const { db } = require('../util/admin');
const { request, response } = require('express');

exports.getAllRecipeLists = (request, response) => {
    db.collection('lists').orderBy('createdAt', 'desc').get()
        .then((data) => {
            let lists = [];
            data.forEach(doc => {
                lists.push({
                    listID: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(lists);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

// Create a completely new recipe list that starts off empty
exports.createNewRecipeList = (request, response) => {
    let newList = {
        userHandle: request.body.handle,
        createdAt: new Date().toISOString(),
        items: []
    };

    console.log(newList);

    db.collection('lists').add(newList)
        .then((doc) => {
            const responseList = newList;
            responseList.listID = doc.id;
            return response.json(responseList);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: 'something went wrong' });
        });
};

// Get the recipe list with the given list ID
exports.getList = (request, response) => {
    let listData = {};
    db.doc(`/lists/${request.params.listID}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).json({ error: `Could not find the list with id: ${request.params.listID}` });
            }
            console.log(doc.data());
            listData = doc.data();
            listData.listID = doc.id;

            return response.json(listData);
        })
        .catch(err => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        })
}

// Add item to currently selected recipe list
exports.addToList = async (request, response) => {
    const itemToAdd = {
        productId: request.body.productID,
        name: request.body.name,
        imageUrl: request.body.imageUrl,
        quantity: 1
    };
    let listData = {};
    const document = await db.doc(`/lists/${request.params.listID}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).json({ error: `Could not find the list with id: ${request.params.listID}` });
            }

            if (doc.data().userHandle !== request.user.handle) {
                return response.status(403).json({ error: 'Unauthorized, need to be owner of the list to delete it.' });
            } else {
                listData = doc.data();
                console.log(listData);

                const items = listData.items;
                console.log(items);
                if (items.find(item => item.productID === request.body.productID)) {
                    const index = items.findIndex(item => item[productID] === request.body.productID);
                    // console.log(index);
                    listData.items[index].quantity = listData.items[index].quantity + 1;
                } else {
                    listData.items.push(itemToAdd);
                    console.log(listData);
                }
                return response.status(200).json(listData);
            }
        })
        .catch(err => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        })
}

// deleting a list from our lists collections
exports.deleteList = (request, response) => {
    const document = db.doc(`/lists/${request.params.listID}`);
    document.get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: `Could not find the list with id: ${request.params.listID}` });
            }

            if (doc.data().userHandle !== request.user.handle) {
                return response.status(403).json({ error: 'Unauthorized, need to be owner of the list to delete it.' });
            } else {
                return document.delete();
            }
        })
        .then(() => {
            return response.json({ message: 'List deleted successfully' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

// Handle deleting of items in list
// TODO
