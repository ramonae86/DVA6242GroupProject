crime <- read.csv(file.choose())
attach(crime)
View(crime)

library(geosphere)

disfunc <- function(lon,lat)
{
  dist<-vector()
  for (i in 1:nrow(crime)){
    dist[i] <- distm(c(lon, lat), c(crime$Latitude[i], crime$Longitude[i]), fun = distHaversine)
  }
  
crime[dist <= 3000*1.6,]
}

df1 <- disfunc(40.688453, -73.986503)
df2 <- disfunc(40.748760, -74.005323)
df3 <- disfunc(40.806264, -73.950991)

library(plyr)

cnt1 <- count(df1, "LAW_CAT_CD")
totcnt1 <- cnt1$freq[1]*9+cnt1$freq[2]*3+cnt1$freq[3]*1

cnt2 <- count(df2, "LAW_CAT_CD")
totcnt2 <- cnt2$freq[1]*9+cnt2$freq[2]*3+cnt2$freq[3]*1

cnt3 <- count(df3, "LAW_CAT_CD")
totcnt3 <- cnt3$freq[1]*9+cnt3$freq[2]*3+cnt3$freq[3]*1

cnt <- c(totcnt1, totcnt2, totcnt3)

relat1 <-1-totcnt1*0.8/(max(cnt))
relat2 <- 1-totcnt2*0.8/(max(cnt))
relat3 <- 1-totcnt3*0.8/(max(cnt))

relat <- c(relat1, relat2, relat3)

s1 <- relat1/max(relat)
s2 <- relat2/max(relat)
s3 <- relat3/max(relat)

s1
s2
s3

s <- c(s1, s2, s3)
