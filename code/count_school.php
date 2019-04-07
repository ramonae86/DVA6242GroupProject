<?php
include 'db_connection.php';
$conn = OpenCon();
echo "Connected Successfully<br>";

$zipcode = $_POST['zipcode'];


function countSchool($conn, $table, $zipcode) {
	$sql ="SELECT count(*) as count from " . $table . " where postcode = " . $zipcode;
	$result = $conn -> query($sql);
	if ($result -> num_rows > 0) {
	    while($row = $result -> fetch_assoc()){
	       return $row['count'];
	    }
	}
}

$high_school_cnt = countSchool($conn, "high_school", $zipcode);
$mid_school_cnt = countSchool($conn, "mid_school", $zipcode);
$prek_school_cnt = countSchool($conn, "prek", $zipcode);

echo "Total count is : " . ($high_school_cnt + $mid_school_cnt + $prek_school_cnt);
CloseCon($conn);
?>