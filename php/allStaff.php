<?php
    header('Content-Type:text/html;charset=utf-8');
    $host = "127.0.0.1";
    $db_user = "root";
    $db_name = "market";
    $db_pass = "mysql";

    $link = mysql_connect($host,$db_user,$db_pass);
    mysql_select_db($db_name,$link);
    mysql_query("SET names UTF8");

    $query=mysql_query("select * from staff");

    while($row=mysql_fetch_array($query)){
        $staffList[] = array(
                'name'=>$row['name'],
                'position'=>$row['position'],
                'gender'=>$row['gender'],
                'num'=>$row['num'],
                'birthday'=>$row['birthday'],
                'age'=>$row['age'],
                'address'=>$row['address'],
                'phone'=>$row['phone'],
                'loginID'=>$row['loginID'],
                'password'=>$row['password'],
                'email'=>$row['email'],
            );
    }
    echo json_encode($staffList);
?>