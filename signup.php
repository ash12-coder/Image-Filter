<!DOCTYPE html>
<html>
<head>
<title>SignUp for Image Filter</title>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
    <style>
        body{
                background-image: url("vincentiu-solomon-ln5drpv_ImI-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
        }
    </style>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
</head>
<body>
 <?php
    include 'dbcon.php';
    if(isset($_POST['submit'])){
        $username = mysqli_real_escape_string($con, $_POST['username']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $mobile = mysqli_real_escape_string($con, $_POST['mobile']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
        
        $pass = password_hash($password, PASSWORD_BCRYPT);
        $cpass = password_hash($cpassword, PASSWORD_BCRYPT);
        
        $emailquery = " select * from registration where email='$email' ";
        $query = mysqli_query($con, $emailquery);
        
        $emailcount = mysqli_num_rows($query);
        
        if($emailcount>0){
            echo "Email Already Exists";
        }else{
            if($password === $cpassword){
                
                $insertquery = " insert into registration(name,email,mobile,password,cpassword) values ('$username','$email','$mobile','$pass','$cpass') ";
                $iquery = mysqli_query($con, $insertquery);
                if($iquery){
    ?>
<script>

alert("Inserted Sucessfull");
</script>
<?php
}
else{
    ?>
<script>

alert("Not Inserted");
</script>
<?php
}
                
            }else{
                echo "Password are not matching";
            }
        }
        
        
        
    }
    
    
    
    
    
    
    
    ?>
    
    
<div class="container">
<div class="card bg-light">
    <img src="icons8-add-user-male-100.png" style="width: 150px; height: 150px; margin: auto;">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	
	<form  action="" method="post">
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input  class="form-control" name="username" placeholder="User Name" type="text" required>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input  class="form-control" name="email" placeholder="Email address" type="email" required>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
    	<input  class="form-control" name="mobile" placeholder="Phone number" type="text" required>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" name="password" placeholder="Create password" type="password" required>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" name="cpassword" placeholder="Confirm password" type="password" required>
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" name="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <a href="login.php">Log In</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->

</div> 
<!--container end.//-->

<br><br>
    </body>
</html>