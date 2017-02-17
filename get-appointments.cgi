#!"C:\Perl64\bin\perl.exe"
use strict;
use warnings;
use CGI;
use DBI;
use JSON;
my @output;
my $cgi = CGI->new;
my $id = $cgi->param('data_id'); 
my $driver = "mysql"; 
my $database = "appointmentdb";
my $dsn = "DBI:$driver:database=$database";
my $userid = "root";
my $password = "root";
my $dbh = DBI->connect($dsn, $userid, $password ) or die $DBI::errstr;
my $sqlc = "SELECT dt, tm, des FROM appointments where des like '%".$id."%' or tm like '%".$id."%' or dt like '%".$id."%' "; 
my $sth = $dbh->prepare($sqlc);
$sth->execute;

while ( my $row = $sth->fetchrow_hashref ){
    push @output, $row;
}
my $cgi = CGI->new;
print $cgi->header( 'application/json' );
#print objToJson( { myData => \@output } );
print objToJson(  \@output  );