import SQLite from 'react-native-sqlite-storage';
import Toast from "react-native-toast-message"

const db = SQLite.openDatabase({ name: 'notesApp.db', location: 'default' });

export const initializeDatabase = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL,color TEXT NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                    Toast.show({
                        type: "error",
                        text1: err
                    })
                }
            );
        });
    });
    return promise;
};

export const insertNotes = async (title, description, color) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO notes (title, description, color ) VALUES (?, ?, ? );`,
                [title, description, color],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};
export const fetchNotes = async () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM notes',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const fetchNotes1 = async () => {
    const promise = new Promise((resolve, reject) => {

        // SELECT QUERY
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM notes',
                [],
                (_, results) => {
                    const len = results.rows.length;
                    console.log('Query successful');
                    for (let i = 0; i < len; i++) {
                        const row = results.rows.item(i);
                        console.log(`Note ID: ${row.id}, Title: ${row.title}, Description: ${row.description}, Color: ${row.color}`);
                    }
                    resolve(results.rows);
                },
                (_, error) => {
                    console.error('Error selecting data:', error);
                    reject(error);
                });

        });
    });
    return promise;
}

export const deleteNote = async (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM  notes where id=?',
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    Toast.show({
                        type: "error",
                        text1: err
                    })
                }
            );
        });
    });
    return promise;
};