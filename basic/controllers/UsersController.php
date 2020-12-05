<?php
namespace app\controllers;
use yii\web\Controller;
use app\models\Users;
class UsersController extends Controller{
    public function actionIndex(){
        $q = Users::find()->all();
        return json_encode($q);
    }
}
?>